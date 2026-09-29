import { OnStart, Service } from "@flamework/core";

@Service()
export class TestRootService implements OnStart {
    onStart(): void {
        print("HELLO! A SERVICE FROM ROOT");
    }
}