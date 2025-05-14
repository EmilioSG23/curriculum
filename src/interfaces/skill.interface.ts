export interface SkillValue {
	id: string;
	name: string;
	color: string;
	text: string;
}

export interface Skill {
	id: string;
	name: string;
	shortName: string;
	values: SkillValue[];
}
