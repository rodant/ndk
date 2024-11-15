import { nip19 } from "nostr-tools";
import { NDKPrivateKeySigner } from "../signers/private-key";
import { NDKEvent } from ".";
import type { EventPointer } from "../user";

describe("event.encode", () => {
    it("encodes all relays the event is known to be on", async () => {
        const event = new NDKEvent(undefined);
        event.kind = 1;
        await event.sign(NDKPrivateKeySigner.generate());

        const encoded = event.encode();
        const { relays } = nip19.decode(encoded).data as EventPointer;
        expect(relays).toEqual(["wss://relay1/", "wss://relay2/"]);
    });
});
