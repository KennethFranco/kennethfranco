frappe.ui.form.on('Fees Library', {

	
	refresh(frm) {
	    const url_base = window.location.origin
	    // Marco's Part 
	    console.log("outside of if statement");
	    
	    $('[data-fieldname="surcharge"]').click( () => {
		   if ($('[data-fieldname="surcharge"]').is(":checked")) {
    		    console.log('CHECKED');
    		    $('[data-fieldname="surcharge_type"]').show();
    		    $('[data-fieldname="float_8"]').show();
    		    float_8
    		}
    		else {
    		    console.log("unchecked");
    		    $('[data-fieldname="surcharge_type"]').hide();
    		    $('[data-fieldname="float_8"]').hide();
    		}
		})
		
		$('[data-fieldname="academic_department"]').keyup(function() {
            console.log("changed")
        });
	    
		
		// Ken's Part
	    
		console.log("test")
    var acad_value = "D05";
    
	const get_currriculum = (acad_value) => {
		console.log(acad_value)

// 		$('.table-body').html('<p id="hide"></p>')
		// Fetch data depends on acad dept and program
		fetch(url_base + '/api/resource/Academic Department/' + acad_value)
		.then(res => res.json())
		.then(res => {
			var acadArray = res.data.programs_per_department
			console.log("Array")
			console.log(acadArray)
			var option_array = []
			console.log(option_array)
		    $.each(acadArray, function (i, item) {
		      //  frm.set_df_property('program_custom', 'options', [`${item.program_code}`])
        //         $('[data-fieldname = "program_custom"]').after($('<option>', { 
        //             value: item.program_code,
        //             text : item.program_code  
        //         }));
            option_array.push(item.program_code)
            });
            console.log(option_array)
            frm.set_df_property('program_custom', 'options', [].concat(option_array));
// 			acadArray.forEach(element => {
// 				$('#hide').hide()
// 				$('.table-body').append(`
// 				<tr>
// 					<td class="th-code">${element.subject_code}</td>
// 					<td>${element.title}</td>
// 				</tr>
// 				`)
// 			});
		})
		.catch((error) => {
// 			$('.table-body').html(`
// 			<tr>
// 				<td class="th-code"> Select academic department</td>
// 				<td></td>
// 			</tr>
// 			`)
		});
	}
	get_currriculum(acad_value);
	},

	academic_department(frm){
		console.log("changed");
		var acad_value = "D04";
		const get_currriculum = (acad_value) => {
			console.log(acad_value)
	
	// 		$('.table-body').html('<p id="hide"></p>')
			// Fetch data depends on acad dept and program
			fetch(url_base + '/api/resource/Academic Department/' + acad_value)
			.then(res => res.json())
			.then(res => {
				var acadArray = res.data.programs_per_department
				console.log("Array")
				console.log(acadArray)
				var option_array = []
				console.log(option_array)
				$.each(acadArray, function (i, item) {
				  //  frm.set_df_property('program_custom', 'options', [`${item.program_code}`])
			//         $('[data-fieldname = "program_custom"]').after($('<option>', { 
			//             value: item.program_code,
			//             text : item.program_code  
			//         }));
				option_array.push(item.program_code)
				});
				console.log(option_array)
				frm.set_df_property('program_custom', 'options', [].concat(option_array));
			})
			.catch((error) => {
			});
		}
		get_currriculum(acad_value);
	}
})