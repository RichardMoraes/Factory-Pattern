import Core from "./src/core";

const core = new Core();

try {
    core.start();
    core.stop();
} catch (error) {
    console.log('[index] Uncaught error!');
    console.log(error);
}