$(document).ready(function() {
    // Sample data with at least 20 rooms and images
    const rooms = [
        { number: "101", resident: "John Doe", status: "occupied", amenities: "WiFi, TV", image: "room1.jpg" },
        { number: "102", resident: "Jane Smith", status: "vacant", amenities: "WiFi, AC", image: "room2.jpg" },
        { number: "103", resident: "Emily Johnson", status: "under maintenance", amenities: "TV, Fridge", image: "room3.jpg" },
        { number: "104", resident: "Michael Brown", status: "occupied", amenities: "WiFi, AC", image: "room4.jpg" },
        { number: "105", resident: "Sarah Davis", status: "vacant", amenities: "WiFi, TV", image: "room5.jpg" },
        { number: "106", resident: "David Wilson", status: "occupied", amenities: "WiFi, TV", image: "room6.jpg" },
        { number: "107", resident: "Daniel Miller", status: "under maintenance", amenities: "TV, Fridge", image: "room7.jpg" },
        { number: "108", resident: "Matthew Taylor", status: "vacant", amenities: "WiFi, AC", image: "room8.jpg" },
        { number: "109", resident: "Emma Anderson", status: "occupied", amenities: "WiFi, TV", image: "room9.jpg" },
        { number: "110", resident: "Sophia Martinez", status: "vacant", amenities: "WiFi, AC", image: "room10.jpg" },
        { number: "111", resident: "Olivia Hernandez", status: "occupied", amenities: "WiFi, TV", image: "room11.jpg" },
        { number: "112", resident: "Ava Lopez", status: "under maintenance", amenities: "TV, Fridge", image: "room12.jpg" },
        { number: "113", resident: "Isabella Gonzalez", status: "vacant", amenities: "WiFi, AC", image: "room13.jpg" },
        { number: "114", resident: "Mia Clark", status: "occupied", amenities: "WiFi, TV", image: "room14.jpg" },
        { number: "115", resident: "Amelia Lewis", status: "vacant", amenities: "WiFi, TV", image: "room15.jpg" },
        { number: "116", resident: "Evelyn Robinson", status: "occupied", amenities: "WiFi, TV", image: "room16.jpg" },
        { number: "117", resident: "Abigail Walker", status: "under maintenance", amenities: "TV, Fridge", image: "room17.jpg" },
        { number: "118", resident: "Harper Young", status: "vacant", amenities: "WiFi, AC", image: "room18.jpg" },
        { number: "119", resident: "Emily Hall", status: "occupied", amenities: "WiFi, TV", image: "room19.jpg" },
        { number: "120", resident: "Ella Allen", status: "vacant", amenities: "WiFi, AC", image: "room20.jpg" }
    ];

    function renderCards(data) {
        const roomCards = $("#roomCards");
        roomCards.empty();
        data.forEach(room => {
            roomCards.append(`
                <div class="col-md-4">
                    <div class="card">
                        <img src="assets/images/${room.image}" class="card-img-top" alt="Room ${room.number}">
                        <div class="card-body">
                            <h5 class="card-title">Room ${room.number}</h5>
                            <p class="card-text">Resident: ${room.resident}</p>
                            <p class="card-text">Status: ${room.status}</p>
                            <p class="card-text">Amenities: ${room.amenities}</p>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    function filterRooms() {
        const searchQuery = $("#searchInput").val().toLowerCase();
        const statusFilter = $("#statusFilter").val();
        const filteredRooms = rooms.filter(room => {
            const matchesSearch = room.number.toLowerCase().includes(searchQuery) || room.resident.toLowerCase().includes(searchQuery);
            const matchesStatus = !statusFilter || room.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
        renderCards(filteredRooms);
    }

    // Initial render
    renderCards(rooms);

    // Event listeners for filtering
    $("#searchInput").on("input", filterRooms);
    $("#statusFilter").on("change", filterRooms);
});
