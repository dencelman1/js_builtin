import {readFileSync, writeFileSync} from "fs";
export default (
    () => {
        var j = JSON;
        j.readFileSync = readFileSync;
        j.writeFileSync = writeFileSync;

        j.read = function(p) {
            return (
                this.parse(this.readFileSync(p))
            )
        };
        j.write = function(p, v) {
            return (
                this.writeFileSync(p, this.stringify(v))
            )
        };
    }
)
