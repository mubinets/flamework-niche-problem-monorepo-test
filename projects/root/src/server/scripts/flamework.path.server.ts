import { Flamework } from "@flamework/core";

// Add some paths, one from here and another from different project. One succeeded, the other one did not.
Flamework.addPaths("projects/common/src/server/services");
Flamework.addPaths("projects/root/src/server/services");

Flamework.ignite();