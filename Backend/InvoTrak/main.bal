import ballerina/io;
import ballerinax/googleapis.gmail;

public function main() returns error? {
    string refreshToken = "YOUR_REFRESH_TOKEN";
    string clientId = "YOUR_CLIENT_ID";
    string clientSecret = "YOUR_CLIENT_SECRET";
    io:println("Hello, World!");
    gmail:Client gmail = check new gmail:Client(
        config = {
            auth: {
                refreshToken,
                clientId,
                clientSecret
            }
        }
    );

    gmail:MessageRequest message = {
        to: ["<recipient>"],
        subject: "Scheduled Maintenance Break Notification",
        bodyInHtml: string `<html>
                            <head>
                                <title>Scheduled Maintenance</title>
                            </head>
                        </html>`
};

gmail:Message sendResult = check gmail->/users/me/messages/send.post(message);
}

