import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

class CORSRequestHandler(Handler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

httpd = socketserver.TCPServer(("", PORT), CORSRequestHandler)

print("serving at port", PORT)
httpd.serve_forever()
