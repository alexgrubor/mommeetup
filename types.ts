export interface Meeting {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    date: string;
    duration: string;
    time: string;
    location: string;
    notes: string;
    createdBy: string;
    remote: boolean;
    public: boolean;
    category: string;
}