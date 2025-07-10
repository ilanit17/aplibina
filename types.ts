
export interface PresentationData {
    title: string;
    subtitle: string;
    logos: {
        src: string;
        alt: string;
    }[];
    mainNav: NavItem[];
    sections: Section[];
    footer: string;
}

export interface NavItem {
    id: string;
    label: string;
}

export interface Section {
    id: string;
    subNav: NavItem[];
    slides: SlideData[];
}

export interface SlideData {
    id: string;
    elements: ContentElement[];
}

export type ContentElement = 
    | HeadingElement
    | HighlightBoxElement
    | ParagraphElement
    | ListElement
    | TableElement
    | CardGridElement
    | GanttChartElement;

export interface BaseElement {
    id: string;
    type: 'heading' | 'highlightBox' | 'paragraph' | 'list' | 'table' | 'cardGrid' | 'ganttChart';
}

export interface HeadingElement extends BaseElement {
    type: 'heading';
    level: 2 | 3 | 4;
    text: string;
    subtext?: string;
}

export interface HighlightBoxElement extends BaseElement {
    type: 'highlightBox';
    text: string;
    variant: 'goal' | 'vision' | 'decision' | 'principles' | 'success' | 'info' | 'warning';
}

export interface ParagraphElement extends BaseElement {
    type: 'paragraph';
    text: string;
}

export interface ListElement extends BaseElement {
    type: 'list';
    items: string[];
    variant: 'bullet' | 'check';
}

export interface TableElement extends BaseElement {
    type: 'table';
    headers: string[];
    rows: string[][];
}

export interface Card {
    title: string;
    items: string[];
    variant: 'meta' | 'district' | 'school' | 'management' | 'training' | 'teams'
}

export interface CardGridElement extends BaseElement {
    type: 'cardGrid';
    cards: Card[];
}

export interface GanttRow {
    task: string;
    responsible: string;
    partners?: string;
    deliverable?: string;
    status?: string;
    months: string[];
    variant?: string;
    group?: string;
}

export interface GanttChartElement extends BaseElement {
    type: 'ganttChart';
    headers: string[];
    rows: GanttRow[];
}
