export interface ITicket {
    title: string,
    description: string,
    reporter: string,
    issue_type: string,
    assignee: string,
    story_points: string,
    priority: string,
    due_date: string,
    attachments: Blob[]
}

