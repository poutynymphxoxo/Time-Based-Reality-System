// Type definitions for stage state

export interface InitState {
    initialized: boolean;
    data: Record<string, any>;
}


export interface MessageState {
    currentState: {
        timestamp: number;
        userInput?: string;
        lastResponse?: string;
        [key: string]: any;
    };
}



export interface Config {
    [key: string]: any;
}
