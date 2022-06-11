export interface Message {
        id: number;
        senderId: number;
        sendUSername: string;
        senderPhotoUrl: string;
        recipientId: number;
        recipientUserName: string;
        recipientPhotoUrl: string;
        content: string;
        dateRead?: Date;
        messageSent: Date;
    }

