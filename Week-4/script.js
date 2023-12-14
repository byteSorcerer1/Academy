function getUnsplashImages() {
    const imageCount = 21; // İstenen fotoğraf sayısı
    const imageSize = '400x400'; // Fotoğraf boyutu

    $('#loading').html('<div class="spinner-border text-primary" role="status"><span class="sr-only">Yükleniyor...</span></div>').show();

    for (let i = 0; i < imageCount; i++) {
        let imageUrl = `https://source.unsplash.com/random/${imageSize}?${i}`;
        let imageElement = `
            <div class="col-md-4 col-sm-6 mb-3">
                <div class="card">
                    <img src="${imageUrl}" class="card-img-top" alt="Unsplash Photo" data-toggle="modal" data-target="#imageModal-${i}">
                    <div class="card-body">
                        <button type="button" class="btn btn-primary btn-sm like-btn" data-liked="false" data-index="${i}"><i class="fas fa-heart"></i> Like</button>
                        <button type="button" class="btn btn-danger btn-sm dislike-btn" data-disliked="false" data-index="${i}"><i class="fas fa-thumbs-down"></i> Dislike</button>
                        <button type="button" class="btn btn-success btn-sm download-btn" data-url="${imageUrl}"><i class="fas fa-download"></i> Download</button>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="imageModal-${i}" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel-${i}" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="imageModalLabel-${i}">Unsplash Photo</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body"><img src="${imageUrl}" class="img-fluid" alt="Unsplash Photo"></div>
                        <div class="modal-footer"><p>Fotoğraf: Unsplash</p></div>
                    </div>
                </div>
            </div>`;
        $("#gallery").append(imageElement);
    }

    $('#loading').hide();
}

function searchUnsplashImages(searchTerm) {
    // Arama işlemleri burada gerçekleştirilecek
}

function toggleLikeButton(button) {
    let isLiked = button.data('liked');
    console.log(`Beğeni durumu: ${isLiked}`);
    // Burada beğeni işlemleri gerçekleştirilecek
    if (isLiked) {
        button.html(`<i class="fas fa-heart"></i> Like`);
    } else {
        button.html(`<i class="far fa-heart"></i> Liked`);
    }
    button.data('liked', !isLiked);
}

function toggleDislikeButton(button) {
    let isDisliked = button.data('disliked');
    console.log(`Beğenmeme durumu: ${isDisliked}`);
    if (isDisliked) {
        button.html(`<i class="fas fa-thumbs-down"></i> Dislike`);
    } else {
        button.html(`<i class="far fa-thumbs-down"></i> Disliked`);
    }
    button.data('disliked', !isDisliked);
}

$(document).ready(() => {
    getUnsplashImages();

    $(document).on('click', '.like-btn', function () {
        toggleLikeButton($(this));
    });

    $(document).on('click', '.dislike-btn', function () {
        toggleDislikeButton($(this));
    });

    $(document).on('click', '.download-btn', function () {
        let downloadUrl = $(this).data('url');
        console.log(`İndirme URL'si: ${downloadUrl}`);
        // Burada indirme işlemleri gerçekleştirilecek
        window.open(downloadUrl, '_blank');
    });

    $('#searchButton').click(() => {
        let searchTerm = $('#searchInput').val();
        searchUnsplashImages(searchTerm);
    });

    $('#searchInput').keypress((e) => {
        if (e.which == 13) {
            $('#searchButton').click();
        }
    });
});
