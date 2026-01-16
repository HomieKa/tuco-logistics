import { ConfidentialClientApplication } from "@azure/msal-node";

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";
const TENANT_ID = process.env.TENANT_ID || "";
const CLIENT_ID = process.env.CLIENT_ID || "";
const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
const GRAPH_SENDER_UPN = process.env.GRAPH_SENDER_UPN || "";
const CONTACT_RECIPIENT =
  process.env.CONTACT_RECIPIENT || process.env.GRAPH_SENDER_UPN || "";
const ACK_LOGO_URL = process.env.ACK_LOGO_URL || "";


const msalApp = new ConfidentialClientApplication({
  auth: {
    clientId: CLIENT_ID,
    authority: `https://login.microsoftonline.com/${TENANT_ID}`,
    clientSecret: CLIENT_SECRET,
  },
});

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");
}

function missingConfig() {
  return !TENANT_ID || !CLIENT_ID || !CLIENT_SECRET || !GRAPH_SENDER_UPN;
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (missingConfig()) {
    res.status(500).json({ error: "Mail service not configured" });
    return;
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ error: "name, email and message are required" });
    return;
  }

  try {
    const tokenResponse = await msalApp.acquireTokenByClientCredential({
      scopes: ["https://graph.microsoft.com/.default"],
    });

    if (!tokenResponse?.accessToken) {
      throw new Error("Failed to acquire access token");
    }

    const safeText = (value) =>
      (value || "").toString().replace(/[<>]/g, "").trim() || "-";

    const company = safeText(req.body?.company);
    const phone = safeText(req.body?.phone);
    const subject = `TUCO Sales Enquiry - ${company === "-" ? "Website" : company} | ${safeText(name)}`;

        const htmlBody = `
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700&display=swap');
      </style>
      <div style="font-family:'Mulish','Segoe UI',Arial,sans-serif;background:#f3f5fb;padding:24px;color:#0c233f;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:720px;margin:0 auto;border-collapse:collapse;font-family:'Mulish','Segoe UI',Arial,sans-serif;">
          <tr>
            <td style="padding:0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-radius:16px;overflow:hidden;background:#0c233f;box-shadow:0 16px 30px rgba(12,35,63,0.15);">
                <tr>
                  <td style="padding:18px 24px;background:#0c233f;">
                    <div style="font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:#62bda5;font-weight:700;">New enquiry</div>
                    <div style="margin:8px 0 2px;font-size:12px;color:#a7c8d8;font-weight:600;">TUCO Freight Management</div>
                    <h2 style="margin:8px 0 0;font-size:20px;color:#ffffff;">${subject}</h2>
                    <p style="margin:12px 0 0;color:rgba(255,255,255,0.85);line-height:1.6;">Submitted from the TUCO website contact form.</p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#ffffff;padding:20px 24px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">
                      <tbody>
                        <tr>
                          <td style="width:150px;padding:8px 10px;border:1px solid #e2e8f0;font-weight:700;background:#f8fafc;">Name</td>
                          <td style="padding:8px 10px;border:1px solid #e2e8f0;">${safeText(name)}</td>
                        </tr>
                        <tr>
                          <td style="width:150px;padding:8px 10px;border:1px solid #e2e8f0;font-weight:700;background:#f8fafc;">Email</td>
                          <td style="padding:8px 10px;border:1px solid #e2e8f0;">${safeText(email)}</td>
                        </tr>
                        <tr>
                          <td style="width:150px;padding:8px 10px;border:1px solid #e2e8f0;font-weight:700;background:#f8fafc;">Company</td>
                          <td style="padding:8px 10px;border:1px solid #e2e8f0;">${company}</td>
                        </tr>
                        <tr>
                          <td style="width:150px;padding:8px 10px;border:1px solid #e2e8f0;font-weight:700;background:#f8fafc;">Phone</td>
                          <td style="padding:8px 10px;border:1px solid #e2e8f0;">${phone}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:16px;width:100%;border-collapse:collapse;border:1px solid #e2e8f0;">
                      <tr>
                        <td style="padding:8px 10px;font-weight:700;background:#f8fafc;border-bottom:1px solid #e2e8f0;">Message</td>
                      </tr>
                      <tr>
                        <td style="padding:10px 12px;white-space:pre-wrap;color:#0c233f;">${safeText(message)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f8fafc;padding:14px 24px;font-size:12px;color:#607087;">Customer: ${safeText(email)} | ${phone}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    `;

    const payload = {
      message: {
        subject,
        body: {
          contentType: "HTML",
          content: htmlBody,
        },
        toRecipients: [
          { emailAddress: { address: CONTACT_RECIPIENT || GRAPH_SENDER_UPN } },
        ],
        replyTo: [{ emailAddress: { address: email } }],
      },
      saveToSentItems: "false",
    };

    const graphResp = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
        GRAPH_SENDER_UPN
      )}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenResponse.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!graphResp.ok) {
      const errorText = await graphResp.text();
      res.status(graphResp.status).json({
        error: "Graph sendMail failed",
        details: errorText || graphResp.statusText,
      });
      return;
    }

    // Send acknowledgment to the enquirer (best effort; errors won't block the main response)
    const ackSubject = `Thanks for contacting TUCO - ${company === "-" ? "Your enquiry" : company}`;
    const ackLogoMarkup = ACK_LOGO_URL
      ? `
        <img src="${ACK_LOGO_URL}" alt="TUCO Freight Management" style="display:block;height:36px;width:auto;margin:0 0 12px 0;" />
      `
      : "";
    const ackHtml = `
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700&display=swap');
      </style>
      <div style="font-family:'Mulish','Segoe UI',Arial,sans-serif;background:#f3f5fb;padding:24px;color:#0c233f;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:720px;margin:0 auto;border-collapse:collapse;font-family:'Mulish','Segoe UI',Arial,sans-serif;">
          <tr>
            <td style="padding:0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-radius:16px;overflow:hidden;background:#0c233f;box-shadow:0 16px 30px rgba(12,35,63,0.15);font-family:'Mulish','Segoe UI',Arial,sans-serif;">
                <tr>
                  <td style="padding:18px 24px;background:#0c233f;">
                    ${ackLogoMarkup}
                    <div style="font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:#62bda5;font-weight:700;">
                      Enquiry received
                    </div>
                    <div style="margin:8px 0 2px;font-size:12px;color:#a7c8d8;font-weight:600;">
                      TUCO Freight Management
                    </div>
                    <h2 style="margin:8px 0 0;font-size:20px;color:#ffffff;">
                      Thanks - your details are on their way.
                    </h2>
                    <p style="margin:12px 0 0;color:rgba(255,255,255,0.85);line-height:1.6;">
                      We have received your enquiry and will respond within one business day.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#ffffff;padding:20px 24px;">
                    <p style="margin:0 0 12px 0;">Hi ${safeText(name)},</p>
                    <p style="margin:0 0 16px 0;">
                      Thanks for contacting TUCO. If you need help sooner, call
                      <a href="tel:1300853074" style="color:#0c233f;font-weight:700;text-decoration:none;">1300 853 074</a>.
                    </p>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">
                      <tbody>
                        <tr>
                          <td style="width:150px;padding:8px 10px;border:1px solid #e2e8f0;font-weight:700;background:#f8fafc;">Name</td>
                          <td style="padding:8px 10px;border:1px solid #e2e8f0;">${safeText(name)}</td>
                        </tr>
                        <tr>
                          <td style="width:150px;padding:8px 10px;border:1px solid #e2e8f0;font-weight:700;background:#f8fafc;">Email</td>
                          <td style="padding:8px 10px;border:1px solid #e2e8f0;">${safeText(email)}</td>
                        </tr>
                        <tr>
                          <td style="width:150px;padding:8px 10px;border:1px solid #e2e8f0;font-weight:700;background:#f8fafc;">Company</td>
                          <td style="padding:8px 10px;border:1px solid #e2e8f0;">${company}</td>
                        </tr>
                        <tr>
                          <td style="width:150px;padding:8px 10px;border:1px solid #e2e8f0;font-weight:700;background:#f8fafc;">Phone</td>
                          <td style="padding:8px 10px;border:1px solid #e2e8f0;">${phone}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div style="margin-top:16px;padding:12px;border:1px solid #e2e8f0;border-radius:12px;">
                      <div style="font-weight:700;margin-bottom:6px;">Your message</div>
                      <div style="white-space:pre-wrap;color:#0c233f;">${safeText(message)}</div>
                    </div>
                    <div style="margin-top:18px;padding:14px;border-radius:12px;border:1px solid #e2e8f0;">
                      <div style="font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#38a2ca;font-weight:700;">
                        What happens next
                      </div>
                      <ol style="margin:8px 0 0 18px;padding:0;color:#0c233f;line-height:1.6;">
                        <li>Our team reviews your enquiry and assigns a specialist.</li>
                        <li>We respond within one business day with next steps.</li>
                      </ol>
                    </div>
                    <p style="margin:16px 0 0 0;">Talk soon,<br/>TUCO Team</p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f8fafc;padding:14px 24px;font-size:12px;color:#607087;">
                    TUCO Freight Management | 1300 853 074 | sales@tuco.com.au
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    `;

    const ackPayload = {
      message: {
        subject: ackSubject,
        body: {
          contentType: "HTML",
          content: ackHtml,
        },
        toRecipients: [{ emailAddress: { address: email } }],
        replyTo: [{ emailAddress: { address: GRAPH_SENDER_UPN } }],
      },
      saveToSentItems: "false",
    };

    try {
      const ackResp = await fetch(
        `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
          GRAPH_SENDER_UPN
        )}/sendMail`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${tokenResponse.accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ackPayload),
        }
      );
      if (!ackResp.ok) {
        const ackText = await ackResp.text();
        console.error("[contact] ack send failed", ackResp.status, ackText);
      }
    } catch (ackError) {
      console.error("[contact] ack send failed", ackError);
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("[contact] sendMail failed", error);
    res.status(502).json({ error: "Unable to send message right now" });
  }
}
