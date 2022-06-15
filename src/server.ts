import { server } from "./http";
import "./websocket/ChatService";

server.listen(3000, () => console.log('🔥 Server running on http://localhost:3000'))