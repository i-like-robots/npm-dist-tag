type TOptions = Partial<{ package: string; version: string }>
export default function npmDistTag(options?: TOptions): Promise<string>
