import Box from "../Presenter/Box";
import { useSelector } from "react-redux";

const ReduxBox3 = () => {
    const store = useSelector(state => state);

    return (
        <Box>{store.count}</Box>
    )
}

export default ReduxBox3;