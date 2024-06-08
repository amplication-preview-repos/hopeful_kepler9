export type Chat = {
  createdAt: Date;
  id: string;
  message: string | null;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
