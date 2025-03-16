export type DropdownOption<T> = {
	key: string;
	value: T;
};

export type MetadataProps = {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
