"use client"

import ListDevices from '@/components/ListDevices'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [devices, setDevices] = useState([
    {
      id: 0,
      name: "Macbook air",
      isReserved: false
    },
    {
      id: 1,
      name: "iPHone XS Max",
      isReserved: false
    },
    {
      id: 2,
      name: "Samsung XS Max",
      isReserved: true
    }
  ])

  const availableDev = devices.filter(d => d.isReserved == false)
  const reservedDev = devices.filter(d => d.isReserved == true)

  const reserve = (id) => {
    console.log("Voy a reservarlo", id)

    // 1. Buscar el ID en "devices"
    const deviceIndex = devices.findIndex(device => device.id === id);

    // 2. Modificar su variable isReseved a true
    if (deviceIndex !== -1) {
      const updatedDevices = [...devices]; // Copiar el array original
      updatedDevices[deviceIndex].isReserved = true; // Cambiar el valor isReserved a true

      // 3. Guardar con setDevices
      setDevices(updatedDevices);
    }

  }

  const liberar = (id) => {
    console.log("El producto queda liberado")

    // 1. Buscar el ID en "devices"
    const deviceIndex = devices.findIndex(device => device.id === id);

    // 2. Modificar su variable isReseved a true
    if (deviceIndex !== -1) {
      const updatedDevices = [...devices];
      updatedDevices[deviceIndex].isReserved = false;

      // 3. Guardar con setDevices
      setDevices(updatedDevices);
    }

  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Gestión del inventario</h1>

      <ListDevices clickReservar={reserve} list={availableDev} title="Productos disponibles" />
      <ListDevices clickLiberar={liberar} list={reservedDev} title="Productos reservados" />
    </main>
  )
}
