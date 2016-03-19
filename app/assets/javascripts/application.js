// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .
	/**
	*   I don't recommend using this plugin on large tables, I just wrote it to make the demo useable. It will work fine for smaller tables 
	*   but will likely encounter performance issues on larger tables.
	*
	*		<input type="text" class="form-control" id="dev-table-filter" data-action="filter" data-filters="#dev-table" placeholder="Filter Developers" />
	*		$(input-element).filterTable()
	*		
	*	The important attributes are 'data-action="filter"' and 'data-filters="#table-selector"'
	*/
	(function(){
	    'use strict';
		var $ = jQuery;
		$.fn.extend({
			filterTable: function(){
				return this.each(function(){
					$(this).on('keyup', function(e){
						$('.filterTable_no_results').remove();
						var $this = $(this), 
	                        search = $this.val().toLowerCase(), 
	                        target = $this.attr('data-filters'), 
	                        $target = $(target), 
	                        $rows = $target.find('tbody tr');
                        
						if(search == '') {
							$rows.show(); 
						} else {
							$rows.each(function(){
								var $this = $(this);
								$this.text().toLowerCase().indexOf(search) === -1 ? $this.hide() : $this.show();
							})
							if($target.find('tbody tr:visible').size() === 0) {
								var col_count = $target.find('tr').first().find('td').size();
								var no_results = $('<tr class="filterTable_no_results"><td colspan="'+col_count+'">No results found</td></tr>')
								$target.find('tbody').append(no_results);
							}
						}
					});
				});
			}
		});
		$('[data-action="filter"]').filterTable();
	})(jQuery);

	$(function(){
	    // attach table filter plugin to inputs
		$('[data-action="filter"]').filterTable();
	
		$('.container').on('click', '.panel-heading span.filter', function(e){
			var $this = $(this), 
				$panel = $this.parents('.panel');
		
			$panel.find('.panel-body').slideToggle();
			if($this.css('display') != 'none') {
				$panel.find('.panel-body input').focus();
			}
		});
		$('[data-toggle="tooltip"]').tooltip();
	})
	
	
	//gora jest do filtrowania :D 
	
	
	
	//cos innego ?\/
	
	
	(function($) {
	    "use strict";
	
		// Options for Message
		//----------------------------------------------
	  var options = {
		  'btn-loading': '<i class="fa fa-spinner fa-pulse"></i>',
		  'btn-success': '<i class="fa fa-check"></i>',
		  'btn-error': '<i class="fa fa-remove"></i>',
		  'msg-success': 'All Good! Redirecting...',
		  'msg-error': 'Wrong login credentials!',
		  'useAJAX': true,
	  };

		// Login Form
		//----------------------------------------------
		// Validation
	  $("#login-form").validate({
	  	rules: {
	      lg_username: "required",
	  	  lg_password: "required",
	    },
	  	errorClass: "form-invalid"
	  });
  
		// Form Submission
	  $("#login-form").submit(function() {
	  	remove_loading($(this));
		
			if(options['useAJAX'] == true)
			{
				// Dummy AJAX request (Replace this with your AJAX code)
			  // If you don't want to use AJAX, remove this
	  	  dummy_submit_form($(this));
		
			  // Cancel the normal submission.
			  // If you don't want to use AJAX, remove this
	  	  return false;
			}
	  });
	
		// Register Form
		//----------------------------------------------
		// Validation
	  $("#register-form").validate({
	  	rules: {
	      reg_username: "required",
	  	  reg_password: {
	  			required: true,
	  			minlength: 5
	  		},
	   		reg_password_confirm: {
	  			required: true,
	  			minlength: 5,
	  			equalTo: "#register-form [name=reg_password]"
	  		},
	  		reg_email: {
	  	    required: true,
	  			email: true
	  		},
	  		reg_agree: "required",
	    },
		  errorClass: "form-invalid",
		  errorPlacement: function( label, element ) {
		    if( element.attr( "type" ) === "checkbox" || element.attr( "type" ) === "radio" ) {
	    		element.parent().append( label ); // this would append the label after all your checkboxes/labels (so the error-label will be the last element in <div class="controls"> )
		    }
				else {
	  	  	label.insertAfter( element ); // standard behaviour
	  	  }
	    }
	  });

	  // Form Submission
	  $("#register-form").submit(function() {
	  	remove_loading($(this));
		
			if(options['useAJAX'] == true)
			{
				// Dummy AJAX request (Replace this with your AJAX code)
			  // If you don't want to use AJAX, remove this
	  	  dummy_submit_form($(this));
		
			  // Cancel the normal submission.
			  // If you don't want to use AJAX, remove this
	  	  return false;
			}
	  });

		// Forgot Password Form
		//----------------------------------------------
		// Validation
	  $("#forgot-password-form").validate({
	  	rules: {
	      fp_email: "required",
	    },
	  	errorClass: "form-invalid"
	  });
  
		// Form Submission
	  $("#forgot-password-form").submit(function() {
	  	remove_loading($(this));
		
			if(options['useAJAX'] == true)
			{
				// Dummy AJAX request (Replace this with your AJAX code)
			  // If you don't want to use AJAX, remove this
	  	  dummy_submit_form($(this));
		
			  // Cancel the normal submission.
			  // If you don't want to use AJAX, remove this
	  	  return false;
			}
	  });

		// Loading
		//----------------------------------------------
	  function remove_loading($form)
	  {
	  	$form.find('[type=submit]').removeClass('error success');
	  	$form.find('.login-form-main-message').removeClass('show error success').html('');
	  }

	  function form_loading($form)
	  {
	    $form.find('[type=submit]').addClass('clicked').html(options['btn-loading']);
	  }
  
	  function form_success($form)
	  {
		  $form.find('[type=submit]').addClass('success').html(options['btn-success']);
		  $form.find('.login-form-main-message').addClass('show success').html(options['msg-success']);
	  }

	  function form_failed($form)
	  {
	  	$form.find('[type=submit]').addClass('error').html(options['btn-error']);
	  	$form.find('.login-form-main-message').addClass('show error').html(options['msg-error']);
	  }

		// Dummy Submit Form (Remove this)
		//----------------------------------------------
		// This is just a dummy form submission. You should use your AJAX function or remove this function if you are not using AJAX.
	  function dummy_submit_form($form)
	  {
	  	if($form.valid())
	  	{
	  		form_loading($form);
  		
	  		setTimeout(function() {
	  			form_success($form);
	  		}, 2000);
	  	}
	  }
	
	})(jQuery);
	
	
	
	