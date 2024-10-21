(function executeRule(current, previous) {
    // get VTB card associated with the story
    var vtbCard = new GlideRecord('vtb_card');
    vtbCard.get('task', current.sys_id);

	// get story
	var story = new GlideRecord('rm_story');
	story.get(current.sys_id);
	var storyState = story.getValue('state');


        // update VTB lane based on the state of the story
	switch (storyState) {
		case '1': // To Do
			vtbCard.setValue('lane','CHANGE TO SYSID OF "TO DO" lane'); //needs to be sysID of the VTB lane
			break;
		case '2': // Doing
			vtbCard.setValue('lane','CHANGE TO SYSID OF "DOING" lane');
			break;
		case '3': // Done
			vtbCard.setValue('lane','CHANGE TO SYSID OF "DONE" lane'); 
			break;
		default:
			vtbCard.setValue('lane','CHANGE TO SYSID of DEFAULT lane');
	}
    vtbCard.update();

})(current, previous);