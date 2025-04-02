import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Employee {
    id: string;
    name: string;
    position: string;
    level: string;
}

interface RecordProps {
    record: Employee;
    deleteRecord: (id: string) => void;
}

const Record: React.FC<RecordProps> = ({ record, deleteRecord }) => (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        <td className="p-4 align-middle">{record.id}</td>
        <td className="p-4 align-middle">{record.name}</td>
        <td className="p-4 align-middle">{record.position}</td>
        <td className="p-4 align-middle">{record.level}</td>
        <td className="p-4 align-middle">
            <div className="flex gap-2">
                <Link
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
                    to={`/edit/${record.id}`}
                >
                    Edit
                </Link>
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
                    type="button"
                    onClick={() => deleteRecord(record.id)}
                >
                    Delete
                </button>
            </div>
        </td>
    </tr>
);

const RecordList: React.FC = () => {
    const [records, setRecords] = useState<Employee[]>([]);

    useEffect(() => {
        const getRecords = async () => {
            try {
                const response = await fetch("/api/employees");
                if (!response.ok) {
                    throw new Error(`An error occurred: ${response.statusText}`);
                }
                const data: Employee[] = await response.json();
                setRecords(data);
            } catch (error) {
                console.error(error);
            }
        };
        getRecords();
    }, []);

    const deleteRecord = async (id: string) => {
        try {
            await fetch(`/api/employees/${id}`, {
                method: "DELETE",
            });
            setRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h3 className="text-lg font-semibold p-4">Employee Records</h3>
            <div className="border rounded-lg overflow-hidden">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Position</th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Level</th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {records.map((record) => (
                            <Record key={record.id} record={record} deleteRecord={deleteRecord} />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default RecordList;