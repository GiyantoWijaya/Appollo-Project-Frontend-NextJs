import TableData from '@/components/gamedetail/tableData.components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import './page.style.css';
import 'bootstrap/dist/css/bootstrap.css';

export default async function GameDetailPage() {
  return (
    <div className="container gamedetail">
      <div className="titlegamedetail">
        <h1 className="text-center title">
          <span className="trophy">
            <FontAwesomeIcon icon={faTrophy} />
          </span>
          Leaderboard
        </h1>
      </div>
      <div className="data-table">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">User Name</th>
              <th scope="col">Score</th>
              <th scope="col">Time</th>
              <th scope="col">Game Name</th>
            </tr>
          </thead>
          <tbody>
            <TableData />
          </tbody>
        </table>
      </div>
    </div>
  );
}
