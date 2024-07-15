const wifiData = [
    { ssid: "Network 1", signal: -70},
    { ssid: "Network 2", signal: -50},
    { ssid: "Network 2", signal: -10},
];

function fillWiFiTable(data) {
    const tableBody = document.querySelector('#wifi_table tbody');
    tableBody.innerHTML = ''; // Clear existing data

    data.forEach(wifi => {
        const row = document.createElement('tr');

        const ssidCell = document.createElement('td');
        ssidCell.textContent = wifi.ssid;
        row.appendChild(ssidCell);

        const signalCell = document.createElement('td');
        signalCell.textContent = `${wifi.signal} dBm`;
        row.appendChild(signalCell);

        tableBody.appendChild(row);
    });
}

window.onload = () => {
    fillWiFiTable(wifiData);
};