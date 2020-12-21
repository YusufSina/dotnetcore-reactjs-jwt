using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using static Backend.Core.Interfaces.IRepository;

namespace Backend.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<T> GetRepository<T>() where T : class;

        Task<int> CommitAsync();
    }
}
