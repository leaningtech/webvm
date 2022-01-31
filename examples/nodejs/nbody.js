const PI = Math.PI;
const SOLAR_MASS = 4 * PI * PI;
const DAYS_PER_YEAR = 365.24;

function Body(x, y, z, vx, vy, vz, mass) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.vx = vx;
    this.vy = vy;
    this.vz = vz;
    this.mass = mass;
}

function Jupiter() {
    return new Body(
        4.84143144246472090e+00,
        -1.16032004402742839e+00,
        -1.03622044471123109e-01,
        1.66007664274403694e-03 * DAYS_PER_YEAR,
        7.69901118419740425e-03 * DAYS_PER_YEAR,
        -6.90460016972063023e-05 * DAYS_PER_YEAR,
        9.54791938424326609e-04 * SOLAR_MASS
    );
}

function Saturn() {
    return new Body(
        8.34336671824457987e+00,
        4.12479856412430479e+00,
        -4.03523417114321381e-01,
        -2.76742510726862411e-03 * DAYS_PER_YEAR,
        4.99852801234917238e-03 * DAYS_PER_YEAR,
        2.30417297573763929e-05 * DAYS_PER_YEAR,
        2.85885980666130812e-04 * SOLAR_MASS
    );
}

function Uranus() {
    return new Body(
        1.28943695621391310e+01,
        -1.51111514016986312e+01,
        -2.23307578892655734e-01,
        2.96460137564761618e-03 * DAYS_PER_YEAR,
        2.37847173959480950e-03 * DAYS_PER_YEAR,
        -2.96589568540237556e-05 * DAYS_PER_YEAR,
        4.36624404335156298e-05 * SOLAR_MASS
    );
}

function Neptune() {
    return new Body(
        1.53796971148509165e+01,
        -2.59193146099879641e+01,
        1.79258772950371181e-01,
        2.68067772490389322e-03 * DAYS_PER_YEAR,
        1.62824170038242295e-03 * DAYS_PER_YEAR,
        -9.51592254519715870e-05 * DAYS_PER_YEAR,
        5.15138902046611451e-05 * SOLAR_MASS
    );
}

function Sun() {
    return new Body(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, SOLAR_MASS);
}

const bodies = Array(Sun(), Jupiter(), Saturn(), Uranus(), Neptune());

function offsetMomentum() {
    let px = 0;
    let py = 0;
    let pz = 0;
    const size = bodies.length;
    for (let i = 0; i < size; i++) {
        const body = bodies[i];
        const mass = body.mass;
        px += body.vx * mass;
        py += body.vy * mass;
        pz += body.vz * mass;
    }

    const body = bodies[0];
    body.vx = -px / SOLAR_MASS;
    body.vy = -py / SOLAR_MASS;
    body.vz = -pz / SOLAR_MASS;
}

function advance(dt) {
    const size = bodies.length;

    for (let i = 0; i < size; i++) {
        const bodyi = bodies[i];
        let vxi = bodyi.vx;
        let vyi = bodyi.vy;
        let vzi = bodyi.vz;
        for (let j = i + 1; j < size; j++) {
            const bodyj = bodies[j];
            const dx = bodyi.x - bodyj.x;
            const dy = bodyi.y - bodyj.y;
            const dz = bodyi.z - bodyj.z;

            const d2 = dx * dx + dy * dy + dz * dz;
            const mag = dt / (d2 * Math.sqrt(d2));

            const massj = bodyj.mass;
            vxi -= dx * massj * mag;
            vyi -= dy * massj * mag;
            vzi -= dz * massj * mag;

            const massi = bodyi.mass;
            bodyj.vx += dx * massi * mag;
            bodyj.vy += dy * massi * mag;
            bodyj.vz += dz * massi * mag;
        }
        bodyi.vx = vxi;
        bodyi.vy = vyi;
        bodyi.vz = vzi;
    }

    for (let i = 0; i < size; i++) {
        const body = bodies[i];
        body.x += dt * body.vx;
        body.y += dt * body.vy;
        body.z += dt * body.vz;
    }
}

function energy() {
    let e = 0;
    const size = bodies.length;

    for (let i = 0; i < size; i++) {
        const bodyi = bodies[i];

        e += 0.5 * bodyi.mass * ( bodyi.vx * bodyi.vx + bodyi.vy * bodyi.vy + bodyi.vz * bodyi.vz );

        for (let j = i + 1; j < size; j++) {
            const bodyj = bodies[j];
            const dx = bodyi.x - bodyj.x;
            const dy = bodyi.y - bodyj.y;
            const dz = bodyi.z - bodyj.z;

            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
            e -= (bodyi.mass * bodyj.mass) / distance;
        }
    }
    return e;
}

const n = +50000000;

offsetMomentum();

console.log(energy().toFixed(9));
const start = Date.now();
for (let i = 0; i < n; i++) {
    advance(0.01);
}
const end = Date.now();
console.log(energy().toFixed(9));
console.log("elapsed:",end-start);
