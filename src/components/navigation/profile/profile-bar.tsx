import { FiLogOut, FiSettings } from "react-icons/fi";

export function ProfileBar({
  username,
  avatarUrl,
  onLogout,
  onSettings,
}: {
  username: string;
  avatarUrl?: string;
  onLogout?: () => void;
  onSettings?: () => void;
}) {
  return (
    <div className="flex items-center gap-3 p-3 border-t border-gray-200 dark:border-gray-700">
      <img
        src={avatarUrl || "https://picsum.photos/64/64"}
        alt="Profile"
        className="w-10 h-10 rounded-full border"
      />
      <div className="flex justify-between flex-1 min-w-0">
        <p className="font-medium truncate">{username}</p>
        <div className="flex gap-2 text-gray-500 text-sm">
          {onSettings && (
            <button onClick={onSettings} className="hover:text-gray-800 hover:cursor-pointer">
              <FiSettings size={16} />
            </button>
          )}
          {onLogout && (
            <button onClick={onLogout} className="hover:text-red-500 hover:cursor-pointer">
              <FiLogOut size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}