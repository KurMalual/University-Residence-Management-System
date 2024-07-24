$(document).ready(function() {
    const maintenanceRequests = [
        { room: 'Room 01', description: 'Leaking tap', status: 'pending', notes: '' },
        { room: 'Room 02', description: 'Broken window', status: 'ongoing', notes: '' },
        { room: 'Room 03', description: 'malfunctioning sockets', status: 'completed', notes: '' },
        // Add more sample data as needed
    ];

    function renderRequests() {
        const filterRoom = $('#filterRoom').val().toLowerCase();
        const filterStatus = $('#filterStatus').val();
        const filteredRequests = maintenanceRequests.filter(request => {
            return (filterRoom === '' || request.room.toLowerCase().includes(filterRoom)) &&
                   (filterStatus === '' || request.status === filterStatus);
        });

        $('#maintenanceRequests').empty();
        filteredRequests.forEach(request => {
            $('#maintenanceRequests').append(`
                <tr>
                    <td>${request.room}</td>
                    <td>${request.description}</td>
                    <td>${request.status}</td>
                    <td>${request.notes}</td>
                    <td><button class="btn btn-sm btn-info add-note" data-room="${request.room}">Add Note</button></td>
                </tr>
            `);
        });
    }

    $('#filterRoom, #filterStatus').on('input change', renderRequests);

    $('#maintenanceRequests').on('click', '.add-note', function() {
        const room = $(this).data('room');
        const note = prompt('Enter your note:');
        if (note) {
            const request = maintenanceRequests.find(r => r.room === room);
            request.notes += note + ' ';
            renderRequests();
        }
    });

    $('#addNoteBtn').click(function() {
        const note = $('#newNote').val();
        if (note) {
            maintenanceRequests.forEach(request => request.notes += note + ' ');
            $('#newNote').val('');
            renderRequests();
        }
    });

    renderRequests();
});
