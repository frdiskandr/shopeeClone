import BasicModal from "~/components/modal/modal";
import HomePage from "~/pages/home";

export default function Home() {

    return (
        <>
            <div className="sm:hidden absolute">
                <BasicModal/>
            </div>
            <HomePage />
        </>
    );
}
