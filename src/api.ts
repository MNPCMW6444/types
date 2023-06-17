import {
  PromptGraph,
  PromptName,
  WhiteIdea,
  WhitePromptResult,
  WhiteUser,
} from ".";

export namespace API {
  export namespace Accounts {
    export namespace CountTokens {
      export interface Res {
        tokens: number;
      }
    }
    export namespace AddTokens {
      export interface Res {
        x: string;
      }
    }
    export namespace RemoveTokens {
      export interface Res {
        x: string;
      }
    }
  }
  export namespace Auth {
    export namespace SignupReq {
      export interface Req {
        email: string;
        idea: string;
      }
      export interface Res {
        result: string;
      }
    }
    export namespace SignupFin {
      export interface Req {
        key: string;
        fullname: string;
        password: string;
        passwordagain: string;
      }
      export type Res = never;
    }
    export namespace Signin {
      export interface Req {
        email: string;
        password: string;
      }
      export type Res = never;
    }
    export namespace UpdateName {
      export interface Req {
        name: string;
      }
      export type Res = WhiteUser;
    }
    export namespace UpdatePassword {
      export interface Req {
        password: string;
      }
      export type Res = WhiteUser;
    }
    export namespace Signout {
      export type Req = never;
      export type Res = never;
    }
    export namespace Passresreq {
      export interface Req {
        email: string;
      }
      export interface Res {
        result: string;
      }
    }
    export namespace Passresfin {
      export interface Req {
        email: string;
        key: string;
        password: string;
        passwordagain: string;
      }
      export interface Res {
        changed: string;
      }
    }
    export namespace Updaten {
      export interface Req {
        notifications: boolean;
        newsletter: boolean;
      }
      export interface Res {
        changed: string;
      }
    }
    export namespace Signedin {
      export type Req = never;
      export type Res = WhiteUser;
    }
  }
  export namespace Data {
    export namespace GetPromptGraph {
      export type Req = never;
      export interface Res {
        graph: PromptGraph;
      }
    }
    export namespace GetIdeas {
      export type Req = never;
      export interface Res {
        ideas: WhiteIdea;
      }
    }
    export namespace SaveIdea {
      export interface Req {
        idea: string;
        ideaId: string;
      }
      export interface Res {
        message: string;
      }
    }
    export namespace ArchiveIdea {
      export interface Req {
        ideaId: string;
      }
      export interface Res {
        message: string;
      }
    }
    export namespace GetPromptResult {
      export interface Req {
        ideaId: string;
        promptName: PromptName;
      }
      export interface Res {
        promptResult: WhitePromptResult;
      }
    }
    export namespace RunAndGetPromptResult {
      export interface Req {
        ideaId: string;
        promptName: PromptName;
        feedback?: string;
      }
      export interface Res {
        response: string;
      }
    }
    export namespace SavePromptResult {
      export interface Req {
        ideaId: string;
        promptName: PromptName;
        data: string;
      }
      export interface Res {
        response: string;
      }
    }
  }
  export namespace Website {
    export namespace SignupReq {
      export interface Req {
        email: string;
        idea: string;
      }
      export type Res = never;
    }
  }
}
