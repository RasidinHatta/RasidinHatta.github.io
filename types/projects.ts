export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tech: string[];
    features: string[];
    githubUrl?: string;
    liveUrl?: string;
    downloadUrl?: string;
    period: string;
    team: string;
    type: 'academic' | 'personal' | 'professional';
    status?: 'active' | 'inactive' | 'completed' | 'ongoing';
}
