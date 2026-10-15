/** Format count as 1.2k etc */
export default function formatCount(count: number): string {
	if (count < 1000) return count.toString();
	if (count < 10000) return (count / 1000).toFixed(1) + "k"; // 1.2k
	return Math.round(count / 1000) + "k"; // 12k
}
