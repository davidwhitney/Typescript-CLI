import * as dotenv from "dotenv";
dotenv.config();

export async function main(args: Args): Promise<number> {
    console.log("Hello world!");

    return 0;
}

if (process.argv.includes("--run")) {
    main({}).then((exitCode) => {
        process.exit(exitCode);
    }
    ).catch((err) => {
        console.error(err);
        process.exit(1);
    });
}