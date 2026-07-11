/**
 * Utility functions for responsive item card layout.
 */

const DEFAULT_CARD_COLUMNS = 4;

const parseConfiguredCardColumns = (
	posProfile?: Record<string, any> | null,
): number | null => {
	const rawValue = posProfile?.custom_card_no;
	if (rawValue === null || rawValue === undefined || rawValue === "") {
		return null;
	}

	const parsedValue = Number.parseInt(String(rawValue), 10);
	if (!Number.isFinite(parsedValue) || parsedValue <= 0) {
		return null;
	}

	return Math.min(Math.max(parsedValue, 1), 8);
};

/**
 * Calculates the number of columns based on container width.
 */
export const getCardColumns = (
	width: number,
	posProfile?: Record<string, any> | null,
): number => {
	const configuredColumns = parseConfiguredCardColumns(posProfile);
	if (configuredColumns !== null) {
		if (width <= 768) {
			return 1;
		}
		if (width <= 1200) {
			return Math.min(2, configuredColumns);
		}
		return configuredColumns;
	}

	if (width <= 768) {
		return 1;
	}
	if (width <= 1200) {
		return 2;
	}
	return DEFAULT_CARD_COLUMNS;
};

/**
 * Calculates the gap between cards based on container width.
 */
export const getCardGap = (width: number): number => {
	if (width <= 768) {
		return 10;
	}
	if (width <= 1200) {
		return 12;
	}
	return 16;
};

/**
 * Calculates the padding for the card container based on container width.
 */
export const getCardPadding = (width: number): number => {
	if (width <= 768) {
		return 10;
	}
	if (width <= 1200) {
		return 12;
	}
	return 16;
};
