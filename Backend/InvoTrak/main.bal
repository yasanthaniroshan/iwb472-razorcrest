import ballerina/io;

string url = "https://us1.pdfgeneratorapi.com";

type AuthHeader record {|
    string Authorization;
    string content_type;
|};

public function main() {
    io:println("Hello, World!");
}
