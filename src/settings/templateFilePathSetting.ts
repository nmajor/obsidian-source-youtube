import { Setting } from "obsidian";
import { FileSuggest } from "../suggest/FileSuggest";
import { SourceSettingRenderProps } from "../types";

export const templateFilePathSetting = (
	props: SourceSettingRenderProps
) => {
	const { el, source, save } = props;

	new Setting(el)
		.setName("Template File Path")
		.setDesc("Template file to be used when importing the source")
		.addSearch((cb) => {
			new FileSuggest(cb.inputEl);
			cb.setPlaceholder("path/to/template.md")
				.setValue(source.templateFilePath || "")
				.onChange(async (value) => {
					source.templateFilePath = value;
					await save(); // no need to refresh only input values are changing
				});
		});
};
