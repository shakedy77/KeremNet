import  { useCallback, useState } from "react";

function useToggle() : [boolean, () => void]{
    const [State, setState] = useState<boolean>(false);
    const toggle = useCallback(() => (setState(bool => !bool)),[]);
    return [State,toggle]
}

export default useToggle