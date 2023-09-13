import mailjet from 'node-mailjet';

const mailjetClient = mailjet.apiConnect(
    String(process.env.MAILJET_API_PUBLIC_KEY),
    String(process.env.MAILJET_API_PRIVATE_KEY),
    {
        options: {
            timeout: 1000,
            maxBodyLength: 1500,
            maxContentLength: 100,
        }
    }
)

export async function sendEmail({ to, from, subject, message }) {
    const emailData = {
        Messages: [
            {
                From: {
                    Email: from,
                    Name: 'Your Name',
                },
                To: [
                    {
                        Email: to,
                        Name: 'Recipient Name',
                    },
                ],
                Subject: subject,
                TextPart: message,
            },
        ],
    };

    try {
        const result = await mailjetClient.post(
            'send', {
                host: 'api.mailjet.com',
                version: 'v3.1',
                output: 'json',
            }
        ).request(emailData);

        console.log('Email sent successfully!');
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}
