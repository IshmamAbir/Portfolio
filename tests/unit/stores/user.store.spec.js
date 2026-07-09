import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';

vi.mock('@/includes/i18n', () => ({
  default: { global: { locale: 'en', t: (key) => key } },
}));

import { useUserStore } from '@/stores/user.store';
import { PortfolioService } from '@/services/portfolio.service';

vi.mock('@/services/portfolio.service', () => ({
  PortfolioService: { getUserInfo: vi.fn() },
}));

describe('useUserStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it('has null user by default', () => {
    const store = useUserStore();
    expect(store.user).toBeNull();
  });

  describe('fetchUserInfo', () => {
    it('fetches and stores user data', async () => {
      const mockUser = { id: 1, name: 'Test User' };
      PortfolioService.getUserInfo.mockResolvedValue(mockUser);
      const store = useUserStore();
      await store.fetchUserInfo();
      expect(PortfolioService.getUserInfo).toHaveBeenCalledOnce();
      expect(store.user).toEqual(mockUser);
    });

    it('does not re-fetch if user already exists', async () => {
      const store = useUserStore();
      store.user = { id: 1, name: 'Existing User' };
      await store.fetchUserInfo();
      expect(PortfolioService.getUserInfo).not.toHaveBeenCalled();
    });

    it('handles fetch errors gracefully', async () => {
      PortfolioService.getUserInfo.mockRejectedValue(new Error('Network error'));
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const store = useUserStore();
      await store.fetchUserInfo();
      expect(store.user).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith('Failed to fetch user:', expect.any(Error));
      consoleSpy.mockRestore();
    });
  });

  describe('clearUser', () => {
    it('sets user to null', () => {
      const store = useUserStore();
      store.user = { id: 1, name: 'Test' };
      store.clearUser();
      expect(store.user).toBeNull();
    });
  });
});
