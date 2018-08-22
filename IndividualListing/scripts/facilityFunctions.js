$(document).ready(function(){
     
    var reviewForm = document.getElementById('frmReviewForm');
    var reviewName = document.getElementById('inpReviewFormUserName');
    var reviewEmail = document.getElementById('inpReviewFormUserEmail');
    var reviewBody = document.getElementById('inpReviewFormUserReview');

    var claimForm = document.getElementById('frmClaimForm');
    var claimName = document.getElementById('inpModalClaimUserName');
    var claimCompany = document.getElementById('inpModalClaimUserCompany');
    var claimEmail = document.getElementById('inpModalClaimUserEmail');
    var claimPhone = document.getElementById('inpModalClaimUserPhone');
    var claimCompanyAddress = document.getElementById('inpModalClaimUserCompanyAddress');

    var editForm = document.getElementById('frmEditForm');
    var editName = document.getElementById('inpModalEditUserName');
    var editEmail = document.getElementById('inpModalEditUserEmail');
    var editCompanyAddress = document.getElementById('inpModalEditUserCompanyAddress');

    //Facility Rating
    $('.facility_rating .starability-result').attr('data-rating', 3);
    //Reviews rating
    $('.top_reviews_container .starability-result').attr('data-rating', 2);
    //Nearby ratings
    $('.nearby_listings .starability-result').attr('data-rating', 3);

    function notifyError(){
        $.notify({
            // options
            icon: 'glyphicon glyphicon-warning-sign',
            title: 'Error.',
            message: 'Please verify all your data.',
        },{
            // settings
            element: 'body',
            position: null,
            type: "danger",
            allow_dismiss: true,
            newest_on_top: true,                    
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 2000,
            delay: 5000,
            timer: 1000,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
        });
    }

    function notifySuccess(){
        $.notify({
            // options
            icon: 'glyphicon glyphicon-ok',
            title: 'Success',
            message: 'Your data has been sent!' 
        },{
            // settings                
            element: 'body',
            position: null,
            type: "success",
            allow_dismiss: true,
            newest_on_top: true,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 2000,
            delay: 4000,
            timer: 1000,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            },
            icon_type: 'class' 
        });
    };

    $('.phone_with_ddd').mask('(00) 0000-0000');

    $('#btnAddReview').click(function(e){
        $('html, body').animate({
            scrollTop: $("div.information_container").offset().top
          }, 1000)
    }),

    $('#lblFacilityClaiming').click(function(e){
        $('#mdlClaimModal').modal('show'); 
    }),

    $('#lblFacilityEditing').click(function(e){
        $('#mdlEditModal').modal('show'); 
    }),

    $('#frmReviewForm').on('submit',function(e){
        var form = document.getElementById('reviewForm');  

        if($('#inpReviewFormUserName').val() == '' || $('#inpReviewFormUserEmail').val() == '' || $('#inpReviewFormUserReview').val() == ''){            
            notifyError();
        }else{
            console.log(reviewName.value);
            console.log(reviewEmail.value);
            console.log(reviewBody.value);
            console.log(reviewForm.rating.value);
            reviewForm.reset();
            notifySuccess();
        }
    }),

    $('#frmClaimForm').on('submit',function(e){
        if($('#inpModalClaimUserName').val() == '' || $('#inpModalClaimUserCompany').val() == '' || $('#inpModalClaimUserEmail').val() == ''
            || $('#inpModalClaimUserPhone').val() == '' || $('#inpModalClaimUserCompanyAddress').val() == ''){            
                notifyError();
        }else{
            console.log(claimName.value);
            console.log(claimCompany.value);
            console.log(claimEmail.value);
            console.log(claimPhone.value);
            console.log(claimCompanyAddress.value);
            claimForm.reset();  
            notifySuccess();    
            
            $('#mdlClaimModal').modal('hide');
        }
    }),

    $('#frmEditForm').on('submit',function(e){
        if($('#inpModalEditUserName').val() == '' || $('#inpModalEditUserEmail').val() == '' || $('#inpModalEditUserCompanyAddress').val() == ''){            
            notifyError();
        }else{
            console.log(editName.value);
            console.log(editEmail.value);
            console.log(editCompanyAddress.value);
            editForm.reset(); 
            notifySuccess();      
            $('#mdlEditModal').modal('hide');               
        }
    })
});