import { Button } from "@mantine/core";
import { BsFilePdf } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";

export default function DownloadsPage() {
    return (
        <div className="mt-17.5 sm:mt-0 py-5">
            <div className={"w-[90%] min-h-[calc(100vh-70px)] grid grid-cols-2x md:grid-cols-4 m-auto"}>
                <div
                    className={
                        "w-full h-max transition-all hover:bg-slate-100 hover:shadow-xl border border-slate-300 grid gap-2 bg-slate-50 p-2 rounded-md "
                    }
                >
                    <div className={"flex gap-2 flex-wrap flex-row items-center"}>
                        <BsFilePdf size={"32px"} />
                        <strong>Fee Structure</strong>
                    </div>
                    <a href="/files/fee_structure.pdf" download={true}>
                        <Button leftSection=<FaDownload /> variant="transparent">
                            Download
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
