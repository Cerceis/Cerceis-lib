/**
 * Structure and logic are based on p5js.
 */
export const createVector = (x, y, z = 0) => {
    const vectorObject = {
        isVectorObject: true,
        x, y, z,
        /**
         * @param x { VectorObject | Number[] | number }
         * @returns
         */
        add(x, y = 0, z = 0) {
            if (x instanceof Array) {
                this.x += x[0] || 0;
                this.y += x[1] || 0;
                this.z += x[2] || 0;
                return this;
            }
            if (x.isVectorObject) {
                this.x += x.x || 0;
                this.y += x.y || 0;
                this.z += x.z || 0;
                return this;
            }
            this.x += x || 0;
            this.y += y || 0;
            this.z += z || 0;
            return this;
        },
        limit(max) {
            const mSq = this.magSq();
            if (mSq > max * max) {
                this.div(Math.sqrt(mSq)) //normalize it
                    .mult(max);
            }
            return this;
        },
        /**
         *
         * @param x { VectorObject | Number[] | number }
         * @param y { number }
         * @param z { number }
         * @returns
         */
        div(x, y = 0, z = 0) {
            if (x.isVectorObject) {
                if (Number.isFinite(x.x) &&
                    Number.isFinite(x.y) &&
                    Number.isFinite(x.z) &&
                    typeof x.x === 'number' &&
                    typeof x.y === 'number' &&
                    typeof x.z === 'number') {
                    this.x /= x.x;
                    this.y /= x.y;
                    this.z /= x.z;
                }
                return this;
            }
            if (x instanceof Array) {
                if (x.every(element => Number.isFinite(element)) &&
                    x.every(element => typeof element === 'number')) {
                    if (x.some(element => element === 0)) {
                        console.warn('Divide by 0');
                        return this;
                    }
                    if (x.length === 1) {
                        this.x /= x[0];
                        this.y /= x[0];
                        this.z /= x[0];
                    }
                    else if (x.length === 2) {
                        this.x /= x[0];
                        this.y /= x[1];
                    }
                    else if (x.length === 3) {
                        this.x /= x[0];
                        this.y /= x[1];
                        this.z /= x[2];
                    }
                }
                else {
                    console.warn('x contains components that are either undefined or not finite numbers');
                }
                return this;
            }
            const vectorComponents = [...arguments];
            if (vectorComponents.every(element => Number.isFinite(element)) &&
                vectorComponents.every(element => typeof element === 'number')) {
                if (vectorComponents.some(element => element === 0)) {
                    console.warn('Divide by 0');
                    return this;
                }
                if (arguments.length === 1) {
                    this.x /= x;
                    this.y /= x;
                    this.z /= x;
                }
                if (arguments.length === 2) {
                    this.x /= x;
                    this.y /= y;
                }
                if (arguments.length === 3) {
                    this.x /= x;
                    this.y /= y;
                    this.z /= z;
                }
            }
            else {
                console.warn('x, y, or z arguments are either undefined or not a finite number');
            }
            return this;
        },
        /**
        *
        * @param x { VectorObject | Number[] | number }
        * @param y { number }
        * @param z { number }
        * @returns
        */
        mult(x, y = 0, z = 0) {
            if (x.isVectorObject) {
                // new p5.Vector will check that values are valid upon construction but it's possible
                // that someone could change the value of a component after creation, which is why we still
                // perform this check
                if (Number.isFinite(x.x) &&
                    Number.isFinite(x.y) &&
                    Number.isFinite(x.z) &&
                    typeof x.x === 'number' &&
                    typeof x.y === 'number' &&
                    typeof x.z === 'number') {
                    this.x *= x.x;
                    this.y *= x.y;
                    this.z *= x.z;
                }
                else {
                    console.warn('x contains components that are either undefined or not finite numbers');
                }
                return this;
            }
            if (x instanceof Array) {
                if (x.every(element => Number.isFinite(element)) &&
                    x.every(element => typeof element === 'number')) {
                    if (x.length === 1) {
                        this.x *= x[0];
                        this.y *= x[0];
                        this.z *= x[0];
                    }
                    else if (x.length === 2) {
                        this.x *= x[0];
                        this.y *= x[1];
                    }
                    else if (x.length === 3) {
                        this.x *= x[0];
                        this.y *= x[1];
                        this.z *= x[2];
                    }
                }
                else {
                    console.warn('x contains elements that are either undefined or not finite numbers');
                }
                return this;
            }
            const vectorComponents = [...arguments];
            if (vectorComponents.every(element => Number.isFinite(element)) &&
                vectorComponents.every(element => typeof element === 'number')) {
                if (arguments.length === 1) {
                    this.x *= x;
                    this.y *= x;
                    this.z *= x;
                }
                if (arguments.length === 2) {
                    this.x *= x;
                    this.y *= y;
                }
                if (arguments.length === 3) {
                    this.x *= x;
                    this.y *= y;
                    this.z *= z;
                }
            }
            else {
                console.warn('x, y, or z arguments are either undefined or not a finite number');
            }
            return this;
        },
        heading() {
            const h = Math.atan2(this.y, this.x);
            return h;
        },
        /*
        * @method sub
        * @param  {VectorObject | Number[]} value the vector to subtract
        * @chainable
        */
        sub(x, y = 0, z = 0) {
            if (x.isVectorObject) {
                this.x -= x.x || 0;
                this.y -= x.y || 0;
                this.z -= x.z || 0;
                return this;
            }
            if (x instanceof Array) {
                this.x -= x[0] || 0;
                this.y -= x[1] || 0;
                this.z -= x[2] || 0;
                return this;
            }
            this.x -= x || 0;
            this.y -= y || 0;
            this.z -= z || 0;
            return this;
        },
        setMag(n) {
            return this.normalize().mult(n);
        },
        magSq() {
            const x = this.x;
            const y = this.y;
            const z = this.z;
            return x * x + y * y + z * z;
        },
        mag() {
            return Math.sqrt(this.magSq());
        },
        normalize() {
            const len = this.mag();
            // here we multiply by the reciprocal instead of calling 'div()'
            // since div duplicates this zero check.
            if (len !== 0)
                this.mult(1 / len);
            return this;
        },
        copy() {
            return createVector(this.x, this.y, this.z);
        },
        dist(x, y = 0) {
            if (x.isVectorObject) {
                return Math.hypot(x.x - this.x, x.y - this.y);
            }
            return Math.hypot(x - this.x, y - this.y);
        },
        toVector2() { return [this.x, this.y]; },
        toVector3() { return [this.x, this.y, this.z]; },
    };
    return vectorObject;
};
export const FromVector = { create: createVector };
