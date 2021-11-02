import { Summary } from "../Summary";
import { Transactionstable } from "../TransactionsTable";
import { Container } from "./styled";

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <Transactionstable />
        </Container>
    )
}