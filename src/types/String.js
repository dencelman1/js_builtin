import {createHmac, randomBytes} from 'node:crypto';

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
                    createHmac('sha512', (
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
                randomBytes(
                    Math.ceil(
                        (rounds ||= 6) / 2
                    )
                )
                .toString('hex')
                .slice(0, rounds)
            );
        }
    )
)