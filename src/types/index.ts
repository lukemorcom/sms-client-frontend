export interface Message {
    body: string;
    sender: string;
    timestamp: Date;
}

export interface Conversation {
    id: number;
    messages: Message[];
}
