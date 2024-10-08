import crypto from 'crypto';
import {ceil} from "#utils/general";

export default () => (
    (
        String.prototype.saltHashOf = function(s) {
            return (
                (
                    this
                ) === (
                    s.saltHash(
                        this.substring(this.length - 6)
                    )
                    
                )
            )
        }
    )
    &&
    (
        String.prototype.saltHash = function(salt) {
            
            return (
                (
                    crypto.createHmac('sha512', (
                        salt ||= this.generateSalt()
                    ))
                    .update(this)
                    .digest('hex')
                )
                + salt
            );
        }
    )
    &&
    (
        String.prototype.generateSalt = function(rounds) {
            
    
            return (
                crypto.randomBytes(
                    ceil(
                        (rounds ||= 6) / 2
                    )
                )
                .toString('hex')
                .slice(0, rounds)
            );
        }
    )
)