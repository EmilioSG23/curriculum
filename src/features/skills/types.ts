export interface SkillValue {
	id: string;
	name: string;
	color: string;
	text: string;
	display: boolean;
}

export interface Skill {
	id: string;
	name: string;
	shortName: string;
	values: SkillValue[];
}
