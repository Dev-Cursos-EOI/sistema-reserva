export default function ListDevices({ list, title, clickReservar, clickLiberar }) {
    return (
        <div className="w-full">
            <h1 className="font-bold text-xl text-left mb-4">
                {title}
            </h1>

            {list.map(device =>
                <div key={device.id} className="flex justify-between items-center mb-2 bg-white dark:bg-slate-700 p-3 shadow rounded-lg">
                    <div>
                        <p className="uppercase text-xs text-slate-500">ZXO2N{device.id}</p>
                        <p className="font-medium">{device.name}</p>
                    </div>
                    {device.isReserved ?
                        <button onClick={() => clickLiberar(device.id)} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 transition-all text-white rounded-md">Liberar</button>
                        :
                        <button onClick={() => clickReservar(device.id)} className="px-4 py-2 bg-green-500 hover:bg-green-700 transition-all text-white rounded-md">Reservar</button>
                    }
                </div>
            )}


        </div>
    );
}
