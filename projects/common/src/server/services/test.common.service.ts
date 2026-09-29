import { OnStart, Service } from "@flamework/core";

@Service()
export class TestCommonService implements OnStart {
    onStart(): void {
        print("HELLO! A SERVICE FROM COMMON");
    }
}